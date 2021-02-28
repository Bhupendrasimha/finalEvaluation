import {
  STUDENTS_DATA_FAILURE,
  STUDENTS_DATA_SUCCESS,
  STUDENTS_DATA_REQ,
  SINGLE_DATA_REQ,
  SINGLE_DATA_FAILURE,
  SINGLE_DATA_SUCCESS,
  SEARCH_DATA_REQ,
  SEARCH_DATA_FAILURE,
  SEARCH_DATA_SUCCESS,
} from "./actionType";

import axios from "axios";

export const studentsDataReq = () => ({
  type: STUDENTS_DATA_REQ,
});

export const studentsDataSuccess = (payload) => ({
  type: STUDENTS_DATA_SUCCESS,
  payload,
});

export const studentsDataFailure = (payload) => ({
  type: STUDENTS_DATA_FAILURE,
  payload,
});

export const getStudentsData = (payload) => (dispatch) => {
  dispatch(studentsDataReq);

  var url =
    "http://localhost:5000/admin/studentsDetails?page=" + payload + "&limit=6";
  axios({
    method: "GET",
    url: url,
  })
    .then((res) => dispatch(studentsDataSuccess(res.data)))
    .catch((err) => dispatch(studentsDataFailure(err)));
};

//GET DATA BY ID

export const singleDataReq = () => ({
  type: SINGLE_DATA_REQ,
});

export const singleDataSuccess = (payload) => ({
  type: SINGLE_DATA_SUCCESS,
  payload,
});

export const singleDataFailure = (payload) => ({
  type: SINGLE_DATA_FAILURE,
  payload,
});

export const getSingleStudentData = (payload) => (dispatch) => {
  dispatch(singleDataReq);

  var url = "http://localhost:5000/admin/studentID?id=" + payload;
  axios({
    method: "GET",
    url: url,
  })
    .then((res) => dispatch(singleDataSuccess(res.data)))
    .catch((err) => dispatch(singleDataFailure(err)));
};

//SEARCH BY NAME

export const searchDataReq = () => ({
  type: SEARCH_DATA_REQ,
});

export const searchDataSuccess = (payload) => ({
  type: SEARCH_DATA_SUCCESS,
  payload,
});

export const searchDataFailure = (payload) => ({
  type: SEARCH_DATA_FAILURE,
  payload,
});

export const searchStudentsData = (payload) => (dispatch) => {
  dispatch(searchDataReq);

  var url = "http://localhost:5000/admin/studentsDetails?q=" + payload;
  axios({
    method: "GET",
    url: url,
  })
    .then((res) => dispatch(searchDataSuccess(res.data)))
    .catch((err) => dispatch(searchDataFailure(err)));
};
