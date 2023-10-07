import axios from "@/utils/axios";
import {
  addstudent,
  addjobs,
  addinternships,
  removestudent,
  iserror,
  removeerror,
} from "../Reducers/studentReducer";
import { toast } from "react-toastify";

export const asynccurrentstudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student");
    dispatch(addstudent(data.student));
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncsignupstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/signup", student);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncsigninstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/signin", student);
    // console.log(data);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncsignoutstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("https://internshalabackend-0io7.onrender.com/student/signout");
    // console.log(data);
    dispatch(removestudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncupdatestudent = (student) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/update/" + _id, student);
    // console.log(data);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncavatarstudent = (avatar) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/avatar/" + _id, avatar);
    // console.log(data);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncresetpasswordstudent =
  (password) => async (dispatch, getState) => {
    try {
      const { _id } = getState().studentReducer.student;
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/reset-password/" + _id,
        password
      );
      // console.log(data);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };

export const asyncforgetpasswordstudent =
  (email) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/send-mail/", email);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };

export const asyncotppasswordstudent = (pwd) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/forget-link/", pwd);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

// read all jobs
export const asyncalljobs = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/alljobs/");
    dispatch(addjobs(data.jobs));
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

// read all internships

export const asyncallinternships = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/allinternships/");
    dispatch(addinternships(data.internships));
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncapplyjobstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/apply/job/" + id);
    dispatch(asynccurrentstudent());
    dispatch(asyncalljobs());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};
export const asyncapplyinternshipstudent =
  (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/apply/internship/" + id);
      dispatch(asynccurrentstudent());
      dispatch(asyncallinternships());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };

export const asyncaddeducation = (education) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/add-edu", education);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncdeleteeducation = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/delete-edu/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncediteducation =
  (id, education) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/edit-edu/" + id, education);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };

// job resumne
export const asyncaddjob = (job) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/add-job", job);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncdeletejob = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/delete-job/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};


export const asynceditjob =(id, job) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/edit-job/" + id, job);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };

  // internship resumne
export const asyncaddinternship = (intern) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/add-intern", intern);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};

export const asyncdeleteinternship = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/delete-intern/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};


export const asynceditinternship =(id, intern) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/edit-intern/" + id, intern);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };



   // responsibility resumne
export const asyncaddresponsibility = (resp) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/add-resp", resp);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};


export const asyncdeleteresponsibility = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/delete-resp/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};


export const asynceditresponsibility =(id, resp) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/edit-resp/" + id, resp);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};






   // Courses resumne
   export const asyncaddcourses = (cours) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/add-cours", cours);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };
  
  
  export const asyncdeletecourses = (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/delete-cours/" + id);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };
  
  
  export const asynceditcourses =(id, cours) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/edit-cours/" + id, cours);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };


  

   // Projects resumne
   export const asyncaddprojects = (proj) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/add-proj", proj);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };
  
  
  export const asyncdeleteprojects = (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/delete-proj/" + id);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };
  
  
  export const asynceditprojects =(id, proj) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/edit-proj/" + id, proj);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };


  

   // Projects resumne
   export const asyncaddskills = (skil) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/add-skil", skil);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };
  
  
  export const asyncdeleteskills = (id) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/delete-skil/" + id);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };
  
  
  export const asynceditskills =(id, skil) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/resume/edit-skil/" + id, skil);
      dispatch(asynccurrentstudent());
    } catch (error) {
      dispatch(iserror(error.response.data));
    }
  };







export const asyncstudentdelete = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("https://internshalabackend-0io7.onrender.com/student/delete");
    // console.log(data);
    dispatch(removestudent());
  } catch (error) {
    dispatch(iserror(error.response.data));
  }
};
