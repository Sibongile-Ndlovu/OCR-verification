/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router'; 
import { count } from '../../models';
import { rejectCount } from '../../models';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-review',
    templateUrl: './review.template.html'
})

export class reviewComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    constructor(private bdms: NDataModelService, private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

    }

    public countrej: number = 0;
    public countappr: number = 0;
    callit; //approve
    msgit; //reject

    rejected() {
        //counts how many times the button has been clicked
        this.countrej = this.countrej + 1;
       
        //save the variable in an object
        this.msgit = {'addrej': this.countrej};
        
        //place object in database
        console.log(this.msgit);
        this.put('rejectCount', this.msgit);
        
        //get object from database
        this.get('rejectcount');
        this.router.navigate(['/home/admin']);
    }


    approve() {
        //counts how many time the button has been clicked
        this.countappr = this.countappr + 1;
        //save the variable in an object
        this.callit = {'count': this.countappr};
        //console.log(this.callit);
        //places object in database
        this.put('count', this.callit);
        //get object from database
        this.get('count');
        //navigates to the next page
        this.router.navigate(['/home/admin']);
    }

    next(){
        this.router.navigate(['/home/admin']);
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                console.log(result)
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                console.log('I did it on my own');
            }, error => {
                console.log(error);
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete (dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
