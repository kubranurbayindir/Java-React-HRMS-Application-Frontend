import axios from "axios"

export default class JobPositionList {
    getJobPositions(){
        return axios.get("http://localhost:8080/api/job-positions/getall") //apini adresini yazıyoruz
    }

}