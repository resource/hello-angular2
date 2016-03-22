import {Logger} from "./logger";
import {Project} from "../models/project";
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class ProjectsService
{

    constructor (private _http: Http) {}

    /**
     * @returns {Promise<T>|Promise<R>|Promise}
     */
    getProjects()
    {
        Logger.log('getting projects');
        return this._http.get('http://localhost:3000/api/projects').map(res => res.json()).catch(error:any => {
            Logger.error(error);
        });

            /*
        return this._http.get("/api/projects").map(res => <Project[]> res.json().data).catch(error => {
            Logger.error(error);
        });
        */
    }

    /**
     * @returns {Promise<T>|Promise<R>|Promise}
     */
    getProjectById(id)
    {
        // return new Promise((resolve,reject) => {
        //
        // });
    }

}