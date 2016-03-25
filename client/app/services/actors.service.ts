import {Logger} from "./logger";
import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class ActorsService
{

    // ============================================================
    // === Initialization =========================================
    // ============================================================

    constructor (private _http: Http) {}

    // ============================================================
    // === Public API =============================================
    // ============================================================

    getActors ()
    {
        return this._http.get('/api/actors')
            .map(res => res.json())
            .catch(this.handleError);
    }

    getActorById(id)
    {
        return this._http.get('/api/actor/' + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    // ============================================================
    // === Private API ============================================
    // ============================================================

    private handleError (error: Response)
    {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        Logger.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}