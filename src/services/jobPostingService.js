import axios from "axios"

export default class JobPostingList {
    getJobPostings(){
        return axios.get("http://localhost:8080/api/job-posting/getall") //apini adresini yazıyoruz
    }

}