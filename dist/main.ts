import {Todo} from './'todo';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const todo = new Todo();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

const router = express.Router();
router.get('/',(req,res)=>{
res.json(todo.lister());
});
router.post('/', (req, res)=>{
let nouveau = req.body.nouveau;
todo.ajouter(nouveau);
res.end('todo ajouté');
});