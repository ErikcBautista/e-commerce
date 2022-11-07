
import {SlideLayout} from '../../../layout/Slide/SlideLayout.js'
import {CardText} from '../../../card/CardText.js'
    import { useEffect, useState } from 'react';
import {getDepartmentService} from '../../../../service/departmenstService.js'

const SlideDepartmentSection = ({departments=[]}) => {

    return (
        <>
        {
            departments.length > 0
            ? <SlideLayout title='Departamentos'
            children={
                departments.map(
                    e => {
                        return (
                            <CardText text={e.name} />
                        )
                    }
                )}
            />
            :null
        }
        </>
    )
}

export { SlideDepartmentSection}