 const Contact = require('./contactsModel/contatsModel')


const listContacts = async () => {
  try {
    const contacts = await Contact.find();   
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
    const removeContact = await Contact.findByIdAndDelete(contactId);
    console.log(removeContact);
    return removeContact;
  } catch (error) {
    
  }
};

const addContact = async (contactData) => {
  try {
    const newContact = await Contact.create(contactData);
    return newContact;
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (contactId, data) => {

  try {
    await Contact.findByIdAndUpdate(contactId, data);
    
    const updateContact = await Contact.findById(contactId);
    return updateContact;
  } catch (error) {
    
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
