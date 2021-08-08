## Install software for Django backend
1. Install python from windows store
1. Install pipenv and add the installation directory (e.g. `C:\Users\Jay\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.7_qbz5n2kfra8p0\LocalCache\local-packages\Python37\Scripts`) to Path (in Advanced System Settings)
    ```shell
    pip install pipenv
    ```  
1. Install django, in a new terminal
    ```shell
    pipenv shell
    pipenv install django
    ```
1. Install django rest framework
    ```shell
    pipenv install djangorestframework django-cors-headers
    ```

## Install software for React frontend
1. Install Node.js at https://nodejs.org/en/
2. Install react tools
    ```shell
    npm install bootstrap@4.6.0 reactstrap@8.9.0 --legacy-peer-deps --save
    npm install @material-ui/core --save
    npm install axios@0.21.1 --save
    ```

## Start backend server
1. In a new terminal
    ```shell
    pipenv shell
    # go to backend directory
    cd C:\xxx\yyy\backend
    python manage.py runserver
    ```
1. You can check/update data in the database via http://localhost:8000/admin, username: `admin`, password: `admin`. Click on the `Equity models` link on the left.

## Start frontend UI
1. Start front end. In a new terminal, run command below and it should pop up a browser window automatically.
    ```shell
    # go front end directory
    cd C:\xxx\yyy\frontend
    npm install
    npm start
    ```