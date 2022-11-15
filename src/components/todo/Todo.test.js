import { fireEvent, render , screen} from "@testing-library/react"
import Todo from "./Todo"


describe('should render Todo', () => { 
    test('should contain heading', () => { 
        render(<Todo />)
        const heading = screen.getByText("Todo List")
        expect(heading).toBeInTheDocument()
     })
     test('should contain input for todo', () => { 
        render(<Todo />)
        const input = screen.queryByPlaceholderText("todo")
        expect(input).toBeInTheDocument();
     })
     test('should contain button for todo', () => { 
        render(<Todo />)
        const button = screen.getByRole("button",{name:/Add/i})
        expect(button).toBeInTheDocument();
     })
 })

 describe('functionality should work correctly', () => { 
    test('should add item into todolist when add button is pressed', () => { 
        render(<Todo />)
        const addButton = screen.getByRole("button",{name:/add/i})
        const input = screen.queryByPlaceholderText('todo')
  
        fireEvent.change(input, { target: { value: 'Learn react testing' } })
        fireEvent.click(addButton)
        
        const todo = screen.getByText("Learn react testing")
        expect(todo).toBeInTheDocument()
     })
  })