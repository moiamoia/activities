import { createStore } from 'redux'
import todoApp from './reducer'
let store = createStore(todoApp)



// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
import * as actions from './actions'
// 打印初始状态
console.log(1,store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// 发起一系列 action
store.dispatch(actions.addTodo('Learn about actions'))
store.dispatch(actions.addTodo('Learn about reducers'))
store.dispatch(actions.addTodo('Learn about store'))
store.dispatch(actions.toggleTodo(0))
store.dispatch(actions.toggleTodo(1))
store.dispatch(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_COMPLETED))

// 停止监听 state 更新
unsubscribe();