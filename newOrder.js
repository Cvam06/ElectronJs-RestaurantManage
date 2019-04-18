const electron = require('electron');
const url = require('url');
const path = require('path');
const BroserWindow = electron.remote.BrowserWindow
/*
const order_btn = document.getElementById('order_btn')
order_btn.addEventListener('click',function(event){
    const modalpath = path.join('file://',__dirname,'addWindow.html')
    window.open(modalpath)
})
*/
const addMenuItem = document.getElementById('addMenuItem')
addMenuItem.addEventListener('click', function(event){
    const modalpath = path.join('file://',__dirname,'addMenuItem.html')
    let win = new BroserWindow({
        width: 800,
        height: 500
    })
    win.loadURL(modalpath)
    win.show()
    win.setMaximizable(false)
})

const modifyMenuItem = document.getElementById('modifyMenuItem')
modifyMenuItem.addEventListener('click', function(event){
    const modalpath = path.join('file://',__dirname,'modifyMenuItem.html')
    let win = new BroserWindow({
        width: 1200,
        height: 600
    })
    win.loadURL(modalpath)
    win.show()
    win.setMaximizable(false)
})

const deleteMenuItem = document.getElementById('deleteMenuItem')
deleteMenuItem.addEventListener('click', function(event){
    const modalpath=path.join('file://',__dirname,'deleteMenuItem.html')
    let win = new BroserWindow({
        width: 1200,
        height: 600
    })
    win.loadURL(modalpath)
    win.show()
    win.setMaximizable(false)
})