export class Logger
{
    static log(msg: any)
    {
        let message = `%c[${new Date().toDateString()}] %c<LOG> %c${msg}`;
        console.log(message, 'color: #666','color: #000','color: #222');
    }

    static error(msg: any)
    {
        let message = `%c[${new Date().toDateString()}] %c<ERROR> %c${msg}`;
        console.log(message, 'color: #666','color: #ff0000','color: #000');
    }

    static warn(msg: any)
    {
        let message = `%c[${new Date().toDateString()}] %c<WARN> %c${msg}`;
        console.log(message, 'color: #666','color: #00ff00','color: #000');
    }

}