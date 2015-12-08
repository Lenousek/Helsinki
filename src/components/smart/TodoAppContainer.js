import {connect} from 'react-redux';
import TodoApp from '../TodoApp';
import { addTodo, toggleTodo, removeTodo } from '../../actions/todo-actions';

function mapStateToProps(state){
    return{
        todos: state.get('todos')
    }
}

function mapDispatchToProps(dispatch){
    return {
        addTodo: todo => dispatch(addTodo(todo)),
        removeTodo: id => dispatch(removeTodo(id)),
        toggleTodo: id => dispatch(toggleTodo(id))
}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);
