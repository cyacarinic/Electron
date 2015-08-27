import app from 'app';
import BrowserWindow from 'browser-window';
import path from 'path';

app.on('ready',
       () => {
           let windowOptions = {
               width: 800,
               height: 600
           };
           var mainWindow = new BrowserWindow(windowOptions);
           mainWindow.loadUrl(path.normalize('file://' + path.join(__dirname, 'index.html')));
       });