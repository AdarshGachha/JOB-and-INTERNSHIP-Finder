"use client"
import { asyncaddeducation } from '@/store/Actions/studentActions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const page = () => {
    const dispatch = useDispatch();
    const [status, setstatus] = useState("")
    const [year, setyear] = useState("")
    const [board, setboard] = useState("")
    const [performance, setperformance] = useState("")
    const [school, setschool] = useState("")
    const [degree, setdegree] = useState("")

console.log(status,year,board,performance,school,degree)
    const AddEducationHandler = () => {

        const education ={

            status: status,
            year: year,
            board: board,
            performance: performance,
            school:school,
            degree: degree,
            // from: "2021-09-09T06:57:03.000Z",
            // to: "2021-09-09T06:57:03.000Z",
            // description: "string",
            // current: true,
            // id: "string"


        }

        dispatch(asyncaddeducation(education))
        
    }

  return (
    <div className={`container mt-5 flex justify-center `}>
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
        <Input value={status} onChange={(e)=>{setstatus(e.target.value)}} size="lg" label="Status" />
        <Input value={year} onChange={(e)=>{setyear(e.target.value)}} size="lg" label="year" />
        <Input value={board} onChange={(e)=>{setboard(e.target.value)}} size="lg" label="board" />
        <Input value={performance} onChange={(e)=>{setperformance(e.target.value)}} size="lg" label="performance" />
        <Input value={school} onChange={(e)=>{setschool(e.target.value)}} size="lg" label="school" />
        <Input value={degree} onChange={(e)=>{setdegree(e.target.value)}} size="lg" label="degree" />
         
        </div>
        
        <Button onClick={AddEducationHandler} className="mt-6" fullWidth>
          ADD
        </Button>
        
      </form>
    </Card>
    </div>
  )
}

export default page