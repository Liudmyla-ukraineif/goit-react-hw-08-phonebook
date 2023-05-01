
// для отримання масиву контактів з API
export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;



// для отримання даних фільтру з API
// export const selectContactFilter = state => state.filter;

export const selectContactFilter = state => state.filter;
