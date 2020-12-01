import React from 'react'
import S from '@sanity/desk-tool/structure-builder'

export default () =>  S
    .list()
    .title(`Slick's Slices`)
    .items([
        S.listItem().titile('Home Page')
    ])
;