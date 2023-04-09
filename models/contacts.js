const { AppError } = require("../utils");
const Contact = require("./contactsModel/contatsModel");

const listContacts = async ({ id: owner, skip, paginationLimit, favorite }) => {
  const findOptions = {
    owner,
  };

  const sortByFavorite = `${favorite ==='true' ? "-favorite" : "favorite"}`;
  const defaultSort = `${favorite === undefined ? "name" : sortByFavorite}`;

  try {
    const contacts = await Contact.find(findOptions)
      .sort(defaultSort)
      .skip(skip)
      .limit(paginationLimit);
    return contacts;
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contact = Contact.findById(contactId);
    return contact;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const removeContact = await Contact.findByIdAndDelete(contactId)

    return removeContact;
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (contactData, owner) => {
  const newContactData = {
    owner,
    ...contactData,
  };
  try {
    const newContact = await Contact.create(newContactData);
    return newContact;
  } catch (error) {
    throw new AppError(400, error);
  }
};

const updateContact = async (contactId, data) => {
  try {
    await Contact.findByIdAndUpdate(contactId, data);

    const updateContact = await Contact.findById(contactId);
    return updateContact;
  } catch (error) {}
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
