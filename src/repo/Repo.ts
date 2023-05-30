import {Task} from "../redux/taskReducer";

class Repo {
    static delay = (ms: any) => {
        return new Promise<void>(r => setTimeout(() => r(), ms))
    }
    static get = async (key: string) => {
        await Repo.delay(1000)
        return JSON.parse(localStorage.getItem((key))!)
    }

    static set = async (key: string, value: Task[]) => {
        await Repo.delay(1000)
        return localStorage.setItem(key, JSON.stringify(value))
    }
}

export default Repo