const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join("models", "contacts.json");
const date = () => new Date().toLocaleString("uk-UA");

const listContacts = async (req, res) => {
  try {
    const data = await fs.readFile(contactsPath, "UTF8");
    const contacts = JSON.parse(data);

    res.status(200).json({
      Date: date(),
      contacts,
    });
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const data = await fs.readFile(contactsPath, "UTF8");
    const contacts = JSON.parse(data);
    const contact = contacts.find(({ id }) => id === contactId);

    if (!contact) {
      res.status(404).json({
        Date: date(),
        message: `Contact with ID: ${contactId} not found :( `,
      });
    }
    res.status(200).json({
      date,
      contact,
    });
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const data = await fs.readFile(contactsPath, "UTF8");
    const contacts = JSON.parse(data);

    const filteredContact = contacts.some(({ id }) => id === contactId);
    if (filteredContact) {
      const removedContact = contacts.filter(({ id }) => id !== contactId);
      await fs.writeFile(contactsPath, JSON.stringify(removedContact), "UTF8");
      res.status(200).json({ message: "contact deleted" });
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const data = await fs.readFile(contactsPath, "UTF8");
    const contacts = JSON.parse(data);

    if (!name || !email || !phone) {
      res.status(400).json({
        message: "missing required name field",
      });
    }
    const contact = {
      name,
      email,
      phone,
      id: uuidv4(),
    };

    contacts.push(contact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts), "UTF8");
    res.status(201).json({
      Date: date(),
      contact,
    });
  } catch (error) {
    console.log(error);
  }
};
// TODO доделать обновлене  и понять что они от меня хотят
const updateContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const requestBodyLength = Object.keys(req.body).length;
    const { contactId } = req.params;
    const data = await fs.readFile(contactsPath, "UTF8");
    const contacts = JSON.parse(data);
    if (requestBodyLength === 0) {
      res.status(400).json({ message: "missing fields" });
    } else {
      contacts.forEach((contact) => {
        if (contact.id === contactId) {
          contact.name = name;
          contact.email = email;
          contact.phone = phone;
        }
      });
      res.status(200).json({ message: "ok" });
    }

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
