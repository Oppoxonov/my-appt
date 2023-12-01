import React from "react";
import { H, HF, HP, IMG, Royxat, Salom,} from "./Style";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Malumot=(props)=>{
  const student=props.data;

return (

  <Grid container spacing={3}>
      {student.map((student) => (
        <Grid item xs={3}  key={student.id}>
          <Paper>
            <Royxat >
              <Salom>
                <H>{student.name}</H>
                <HP style={{ fontWeight: 'bold' }}>{student.surname}</HP>
                <HF>{student.tel}</HF>
              </Salom>
              <IMG src={student.img} alt={student.img.alt}/>
            </Royxat>
          </Paper>
        </Grid>
    ))}
  </Grid>
);
}

export default Malumot;

