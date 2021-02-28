import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getStudentsData,
  getSingleStudentData,
} from "../redux/data/actionCreator";
import StudentsID from "../pages/student";
import Pagination from "@material-ui/lab/Pagination";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@material-ui/core";
import Styled from "styled-components";

const Paginations = Styled.div`
padding:10px;
margin:10px;
justify-content:center;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    Width: 350,
    display: "flex",
    flexDirection: "row",
  },
  pagining: {
    "& > *": {
      marginTop: theme.spacing(2),
      marginLeft: "35%",
    },
  },
}));

function PageBody() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const studentsData = useSelector(
    (state) => state.StudentsData.studentsRecords
  );
  //  console.log(studentsData)
  const details = useSelector((state) => state.StudentsData.details);
  const studentLength = useSelector(
    (state) => state.StudentsData.studentsLength
  );
  const studentData = useSelector(
    (state) => state.StudentsData.singlestudentRecords
  );
  const single = useSelector((state) => state.StudentsData.single);
  //console.log(studentLength)
  useEffect(() => {
    dispatch(getStudentsData(page));
  }, [page]);
  const classes = useStyles();
  const handleMore = (id) => {
    console.log(id);
    dispatch(getSingleStudentData(id));
  };
  return (
    <div>
      {!details ? (
        <div>
          {single ? (
            <div className={classes.pagining}>
              <Pagination
                count={Math.floor(studentLength / 6)}
                onChange={(e, val) => setPage(val)}
              />
            </div>
          ) : null}

          <br />
          <Grid container spacing={2}>
            {studentsData.map((item) => (
              <Grid item sm={12} lg={6}>
                <div key={item.id}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <Typography component="h4">
                        Student : {item.name}
                      </Typography>
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="h5"
                        >
                          Gender : {item.gender}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="h5"
                        >
                          Age : {item.age}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="h5"
                        >
                          Gender: {item.gender}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="h5"
                        >
                          Grade: {item.grade}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="h5"
                        >
                          Total Tests:{item.test.length}
                        </Typography>
                        <button onClick={() => handleMore(item._id)}>
                          View More
                        </button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <StudentsID data={studentData} />
      )}
    </div>
  );
}
export default PageBody;
