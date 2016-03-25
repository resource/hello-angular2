import {Logger} from "./logger";
import {Http, Response} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class ItemsService
{

    // ============================================================
    // === Initialization =========================================
    // ============================================================

    constructor (private _http: Http) {}

    // ============================================================
    // === Public API =============================================
    // ============================================================

    getItems ()
    {
        return this._http.get('/api/items')
            .map(res => res.json())
            .catch(this.handleError);
    }

    getItemById(id)
    {
        return this._http.get('/api/item/' + id)
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