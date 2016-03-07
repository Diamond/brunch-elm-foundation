module App where

import Html exposing (..)
import Html.Attributes exposing (..)

view : Html
view =
  div [id "content"] [
    h1 [] [ text "Foundation Elm Component" ],
    button [ class "button" ] [ text "Do a new thing" ]
  ]

main : Html
main =
  view
