

// selectors

export const getDeleteProgress = (state) => state.logRecuders.deleteInProgress;
export const getUpdateProgress = (state) => state.logRecuders.updateInProgress;
export const getCurrentLog = (state, currentId) => state.logRecuders.logs.find((x) => x.id === currentId);
export const selectedIsCreating = (state) => state.logRecuders.isCreating;
export const selectedError = (state) => state.logRecuders.error;
export const selectedIsFetching = (state) => state.logRecuders.isFetching;
export const selectedLogs = (state) => state.logRecuders.logs;
