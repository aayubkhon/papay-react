import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChoosenDish from "./choosenDish";
import OneRestaurants from "./oneRestaurants";
import AllRestaurants from "./allRestaurants";
import "../../css/restaurant.css";

export function RestaurantPage(props: any) {
  let restaurant = useRouteMatch();
  console.log(restaurant);
  return (
    <div className="restaurant_page">
      <Switch>
        <Route path={`${restaurant.path}/dish/:dish_id`}>
          <ChoosenDish  onAdd={props.onAdd} />
        </Route>
        <Route path={`${restaurant.path}/:restaurant_id`}>
          <OneRestaurants onAdd={props.onAdd} />
        </Route>
        <Route path={`${restaurant.path}`}>
          <AllRestaurants />
        </Route>
      </Switch>
    </div>
  );
}
