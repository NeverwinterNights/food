import {createAction, createSlice} from "@reduxjs/toolkit";
import {MEALS, MealType} from "../data/dummy-data";


type InitialStateType = {
    meals: MealType[]
    filteredMeals: MealType[]
    favoriteMeals: MealType[]
}

export type filtersSettings = {
    glutenFree: boolean,
    lactoseFree: boolean,
    vegan: boolean,
    vegetarian: boolean
}

export const addFavoritesAC = createAction<{ id: string }>("meals/addFavoritesAC")
export const setFiltersAC = createAction<{ filters: filtersSettings }>("meals/setFiltersAC")

const initialState: InitialStateType = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}


const slice = createSlice({
    name: "meals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addFavoritesAC, (state, action) => {
                const index = state.favoriteMeals.findIndex((meal) => meal.id === action.payload.id)
                if (index >= 0) {
                    state.favoriteMeals.splice(index, 1)
                }
                if (index < 0) {
                    const index = state.meals.findIndex((meal) => meal.id === action.payload.id)
                    state.favoriteMeals = [state.meals[index], ...state.favoriteMeals]
                }
            })
            .addCase(setFiltersAC, (state, action) => {
                state.filteredMeals=state.meals.filter((meal) => {
                    if (action.payload.filters.glutenFree && !meal.isGlutenFree) return false
                    if (action.payload.filters.lactoseFree && !meal.isLactoseFree) return false
                    if (action.payload.filters.vegan && !meal.isVegan) return false
                    if (action.payload.filters.vegetarian && !meal.isVegetarian) return false
                    return true
                })
            })

    }
})


export const reducer = slice.reducer