# Project: NGCASH_API
# 📁 Collection: Account 


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
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IlBlcnJ5IiwiYWNjb3VudCI6eyJpZCI6MSwiYmFsYW5jZSI6ODB9fSwiaWF0IjoxNjY5MDgxNDM1LCJleHAiOjE2NjkxNjc4MzV9.43QaAkiwAl4VwMsKHZk1hjH0weea7AlXCR1qhqpw0NE|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GetTransactionsByDate
### Method: GET
>```
>http://localhost:3001/transaction/date
>```
### Headers

|Content-Type|Value|
|---|---|
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IlBlcnJ5IiwiYWNjb3VudCI6eyJpZCI6MSwiYmFsYW5jZSI6ODB9fSwiaWF0IjoxNjY5MDgxNDM1LCJleHAiOjE2NjkxNjc4MzV9.43QaAkiwAl4VwMsKHZk1hjH0weea7AlXCR1qhqpw0NE|


### Body (**raw**)

```json
{
  "dataStart": "19/11/2022",
  "dataEnd": "21/11/2022"
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
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IlBlcnJ5IiwiYWNjb3VudCI6eyJpZCI6MSwiYmFsYW5jZSI6ODB9fSwiaWF0IjoxNjY5MDgxNDM1LCJleHAiOjE2NjkxNjc4MzV9.43QaAkiwAl4VwMsKHZk1hjH0weea7AlXCR1qhqpw0NE|


### Body (**raw**)

```json
{
  "dataStart": "19/11/2022",
  "dataEnd": "22/11/2022"
}
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
|Authorization|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IlBlcnJ5IiwiYWNjb3VudCI6eyJpZCI6MSwiYmFsYW5jZSI6ODB9fSwiaWF0IjoxNjY5MDgxNDM1LCJleHAiOjE2NjkxNjc4MzV9.43QaAkiwAl4VwMsKHZk1hjH0weea7AlXCR1qhqpw0NE|


### Body (**raw**)

```json
{
  "dataStart": "19/11/2022",
  "dataEnd": "22/11/2022"
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
    "username": "Perry",
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
    "username": "Eagora",
    "password": "Ab123456"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
