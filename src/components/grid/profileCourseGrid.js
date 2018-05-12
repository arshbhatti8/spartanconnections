import React from 'react';
import CourseCard from '../cards/courseCard';
import {Grid} from 'semantic-ui-react';
let courses=[
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},
    {name:'CMPE 280',instructor:'Ron Mak',tutor:'Avdeep Sandhu',image:'cmpe146'},
    {name:'CMPE 281',instructor:'Jerry Gao',tutor:'Harkanwaldeep Saini',image:'cmpe146'},
    {name:'CMPE 146B',instructor:'Tony Stark',tutor:'Manpreet Saini',image:'cmpe146'},


];

const CourseGrid = () => {

    return (
        <div>
            {
                courses.map((course,index)=>
                    <Grid.Column
                        width={1}
                        key={index}
                        style={{marginBottom:'10%',display:'inline-block',marginRight:'2%',marginLeft:'2%'}}>
                        <CourseCard
                            header={courses[index].name}
                            instructor={courses[index].instructor}
                            image={courses[index].image}
                            tutor={courses[index].tutor}/>
                    </Grid.Column>
                )
            }

        </div>
    );

};
export default CourseGrid
