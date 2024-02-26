import dotenv from "dotenv";
import app from './app';

dotenv.config();

const port = app.get('port');
app.listen(port, () => {
    console.log('Server running on port', port);
})
