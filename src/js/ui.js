import jss from 'jss';
import preset from 'jss-preset-default';
import * as styles from '../styles/notification.module.css';

jss.setup(preset());

const checkboxSize = '30px';
const jssStyles = {
  realCheckbox: {
    width: checkboxSize,
    height: checkboxSize,
    cursor: 'pointer',
    opacity: 0,
    position: 'absolute',
    top: '-3px',
    left: '-5px',
  },
};
const { classes } = jss.createStyleSheet(jssStyles).attach();

export function renderTodos(todos) {
  const renderedItemArray = todos.map(function (todo) {
    const className = todo.completed ? 'completed' : '';
    const completionClass = todo.completed ? 'checked' : '';
    return `
            <li data-id="${todo.id}" class="${className}">
                <span class="custom-checkbox">
                    <img class="check" src="../images/checkmark.svg" width="22" height="22"></img>
                    <input class="${classes.realCheckbox}" data-element="real-checkbox" type="checkbox" ${completionClass} />
                </span>
                <label>${todo.text}</label>
                <span class="delete"></span>
            </li>
        `;
  });
  document.querySelector('.todo-list').innerHTML = renderedItemArray.join('');
}

export function clearNewTodoInput() {
  document.querySelector('.new-todo').value = '';
  showNotification();
}

export function getTodoId(element) {
  return parseInt(
    element.dataset.id ||
      element.parentNode.dataset.id ||
      element.parentNode.parentNode.dataset.id,
    10
  );
}

function showNotification() {
  const notification = `<div class="${styles.notification}">Todo item added</div>`;
  document.body.innerHTML += notification;
  setTimeout(function () {
    const notificationElement = document.querySelector(
      `.${styles.notification}`
    );
    notificationElement.parentNode.removeChild(notificationElement);
  }, 2000);
}
