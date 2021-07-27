import * as types from "../constants";

export const getStatusNetwork = (state) => state.networkReducer.network;

export const getTaskByPropsId = (state, idProps) =>
  state.taskReducer.task.find((x) => x.id === idProps);

export const getReadyTaskList = (state) =>
  state.taskReducer.task.filter((x) => x.status === types.READY);

export const getIdList = (state) => state.taskReducer.task.map((x) => x.id);
