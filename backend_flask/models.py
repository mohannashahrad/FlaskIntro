from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class Todo(db.Model):
    __tablename__ = 'todos'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200),nullable=False)
    completed = db.Column(db.Integer, default=0,nullable=False)
    date_created = db.Column(db.DateTime,default=datetime.utcnow)
    deadline = db.Column(db.DateTime,default=datetime.utcnow)
    importance = db.Column(db.Integer, default=0)
    time_estimate = db.Column(db.Integer, default=0)


    def __repr__(self):
        if len(self.task) < 40:
            return '<Task {}'.format(self.task)
        return '<Task {}'.format(self.task[:40])
