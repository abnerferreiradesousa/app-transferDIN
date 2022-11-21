# Project: NGCASH_API
# 📁 Collection: Account

## OBS.: Os campos abaixo como body, token, headers são meramente ilustrativos e representam o que precisa ser passada a cada rota para que possa funcionar tudo corretamente.


## End-point: Account
### Method: GET
>```
>http://localhost:3001/account
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IktpY2siLCJhY2NvdW50Ijp7ImlkIjoxLCJiYWxhbmNlIjoxMDB9fSwiaWF0IjoxNjY4NjMwMjQ5LCJleHAiOjE2Njg3MTY2NDl9.Ilxl46E6Xbol0bTF-06xojbLccsQZgfyPMeL0w4rrpk|


### Body (**raw**)

```json

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Transaction 


## End-point: TransferCash
### Method: POST
>```
>http://localhost:3001/transaction
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0LCJ1c2VybmFtZSI6IkFzdHJvbmF1dCIsImFjY291bnQiOnsiaWQiOjQsImJhbGFuY2UiOjEwNn19LCJpYXQiOjE2Njg5ODY1ODksImV4cCI6MTY2OTA3Mjk4OX0.cI-PQJLHCAU5_aAYXXfvJuIPvE104WAPRW5muHUrCuA|


### Body (**raw**)

```json
{
  "usernameCredited": "Perry",
  "value": 20
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GetAllTransactions
### Method: GET
>```
>http://localhost:3001/transaction
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IlBlcnJ5IiwiYWNjb3VudCI6eyJpZCI6MSwiYmFsYW5jZSI6MTAwfX0sImlhdCI6MTY2ODk0NzIyOCwiZXhwIjoxNjY5MDMzNjI4fQ.TNhQvBE6lbsZmreNLImoS_P1y_Erfj-4dtINW6GWTh0|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GetTransactionsByDate
### Method: GET
>```
>http://localhost:3001/transaction/date
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJ1c2VybmFtZSI6IktpY2siLCJhY2NvdW50Ijp7ImlkIjoyLCJiYWxhbmNlIjoxMDB9fSwiaWF0IjoxNjY4NzEwMzQxLCJleHAiOjE2Njg3OTY3NDF9.Di5yva6_tgeHh_HAoU3jzTBb6iXKEl-1TKnPp0ZuoHo|


### Body (**raw**)

```json
{
  "dataStart": "2022-11-16",
  "dataEnd": "2022-11-19"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GetTransactionsByCashIn
### Method: GET
>```
>http://localhost:3001/transaction/cashin
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0LCJ1c2VybmFtZSI6IkFzdHJvbmF1dCIsImFjY291bnQiOnsiaWQiOjQsImJhbGFuY2UiOjEwNn19LCJpYXQiOjE2Njg5ODY1ODksImV4cCI6MTY2OTA3Mjk4OX0.cI-PQJLHCAU5_aAYXXfvJuIPvE104WAPRW5muHUrCuA|


### Body (**raw**)

```json

```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GetTransactionsByCashOut
### Method: GET
>```
>http://localhost:3001/transaction/cashout
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0LCJ1c2VybmFtZSI6IkFzdHJvbmF1dCIsImFjY291bnQiOnsiaWQiOjQsImJhbGFuY2UiOjEwNn19LCJpYXQiOjE2Njg5ODY1ODksImV4cCI6MTY2OTA3Mjk4OX0.cI-PQJLHCAU5_aAYXXfvJuIPvE104WAPRW5muHUrCuA|


### Body (**raw**)

```json
{
  "dataStart": "2022-11-17",
  "dataEnd": "2022-11-19"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: User 


## End-point: Login
### Method: POST
>```
>http://localhost:3001/login
>```
### Body (**raw**)

```json
{
    "username": "Astronaut",
    "password": "Ab123456"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: CreateUser
### Method: POST
>```
>http://localhost:3001/user
>```
### Body (**raw**)

```json
{
    "username": "Kick",
    "password": "Ab123456"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
