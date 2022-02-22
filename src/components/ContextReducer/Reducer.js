const Reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_TODO":
            return {
                ...state,
                todo: [...state.todo, action.payload],
            };

        case "EDIT_TODO":
            const editingArticle = action.payload;
            console.log(action.payload);
            console.log(state.todo);
            const loop = state.todo;
            // const updatedArticle = state.todo.map((todo) => {
            //     if (todo.id === editingArticle) {
            //         return editingArticle;
            //     }
            //     return todo;
            // });

            const updateList = loop.find((e) => {
                console.log(e);
                return e.id === editingArticle;
            });
            console.log(
                "----------------EDit Iodo----------------------------------"
            );
            console.log(updateList);
            return {
                ...state,
                todo: state.todo,
            };

        case "DELETE_TODO":
            return {
                ...state,
                todo: state.todo.filter((todo) => todo.id !== action.payload),
            };

        default:
            return state;
    }
};

export default Reducer;
