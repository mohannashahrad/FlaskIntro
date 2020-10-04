from flask import Blueprint, jsonify, request
from backend_flask.models import Todo, db
from backend_flask.utils import todo_serializer, generate_response
import backend_flask.utils

todos = Blueprint('planno2', __name__)


@todos.route('/planno2/', methods=['GET'])
def list_all_todos():
    return jsonify([*map(todo_serializer, Todo.query.all())])


@todos.route('/planno2/<int:todo_id>', methods=['GET'])
def list_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    if not todo:
        return generate_response(404, 'Task not found.')

    return jsonify(todo_serializer(todo))


@todos.route('/planno2/', methods=['POST'])
def add_todo():
    post_data = request.get_json()
    if not post_data:
        return generate_response(400, 'Invalid payload.')

    task = post_data.get('task')
    todo = Todo(task=task)
    db.session.add(todo)
    db.session.commit()

    return generate_response(201, 'Task added.', todo_serializer(todo))


@todos.route('/planno2/<int:todo_id>', methods=['PUT'])
def update_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    if not todo:
        return generate_response(404, 'Task not found.')

    post_data = request.get_json()
    if not post_data:
        return generate_response(400, 'Invalid payload.')

    todo.done = post_data.get('done')
    db.session.commit()

    return generate_response(200, 'Task updated.', todo_serializer(todo))


@todos.route('/planno2/<int:todo_id>', methods=['DELETE'])
def delete_todo(todo_id):
    todo = Todo.query.filter_by(id=todo_id).first()
    if not todo:
        return generate_response(404, 'Task not found.')

    db.session.delete(todo)
    db.session.commit()
    return generate_response(200, 'Task deleted.')
