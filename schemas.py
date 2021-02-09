from pydantic import BaseModel
from datetime import date

dict = {'name': 'maria', 'author': 'santa'}


class Book(BaseModel):
    name: int
    author: str
    pub_date: date = None
    genres: str = None


obj = Book(**dict)

print(obj.name, obj.author)
