import React from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import Backbutton from './Backbutton';
import Spinner from './Spinner';
const ShowTeacher = () => {

  const [teacher, setTeacher] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/admin/teachers/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  },[]);




  return (
    <div>ShowTeacher</div>
  )
}

export default ShowTeacher