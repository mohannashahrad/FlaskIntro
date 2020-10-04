from flask import jsonify


def todo_serializer(todo):
    todo_dict = {'id': todo.id, 'content': todo.content, 'completed': todo.completed, 
    'deadline': todo.deadline, 'importance': todo.importance, 'time_estimate': todo.time_estimate,
    'date_created' : todo.date_created}
    return todo_dict


def generate_response(code, message, todo=None):
    if todo:
        return jsonify({'code': code, 'message': message, 'todo': todo}), code
    return jsonify({'code': code, 'message': message}), code
