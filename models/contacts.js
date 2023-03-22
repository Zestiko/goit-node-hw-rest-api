const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join("models", "contacts.json");


const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "UTF8");
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    
    const contacts = await listContacts();
    const contact = contacts.find(({ id }) => id === contactId);
    return contact;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    console.log(contacts);

    const filteredContact = contacts.some(({ id }) => id === contactId);
    if (filteredContact) {
      const removedContact = contacts.filter(({ id }) => id !== contactId);

      await fs.writeFile(contactsPath, JSON.stringify(removedContact), "UTF8");
      return removedContact;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (name, email, phone) => {
  try {
   const contacts = await listContacts();

    const contact = {
      name,
      email,
      phone,
      id: uuidv4(),
    };

    contacts.push(contact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts), "UTF8");
    return contact;
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (contactId, data) => {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }
   contacts[index] = { id: contactId, ...data };
   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "UTF8");
   return contacts[index];
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
