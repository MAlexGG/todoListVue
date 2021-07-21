import axios from 'axios'
const baseURL = "http://localhost:3000/"

export const services = {
    getAll() {
        return axios.get(baseURL + "tasks/")
    },
    createTask(data) {
        axios.post(baseURL + "tasks/", data)
        return this.getAll()
    },
    deleteTask(id) {
        axios.delete(baseURL + `tasks/${id}`)
        return this.getAll()
    },
    editTask(id, data) {
        axios.put(baseURL + `tasks/${id}`, data)
        return this.getAll()
    }
}