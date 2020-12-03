import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import { FcHome } from 'react-icons/fc'

export default () =>  S
    .list()
    .title(`Slick's Slices`)
    .items([
        S.listItem()
            .title('Home Page')
            .icon(FcHome)
            .child(
                S.editor()
                    .schemaType('storeSettings')
                    .documentId('downtown') // new documentId: any string
            ),
            ...S.documentTypeListItems().filter(item => item.getId() !== 'storeSettings')
    ])
;