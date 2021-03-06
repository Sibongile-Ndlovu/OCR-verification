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
    selector: 'bh-admin',
    templateUrl: './admin.template.html'
})

export class adminComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    count;
    rejectCount;
    approved;
    rejectCounted;
    completed;

    constructor(private bdms: NDataModelService, private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.getCount();
        this.getNumRejected();
        //console.log(this.getCount+this.getNumRejected);
        //var rejected 
        // console.log(this.getCount());
    }

    previous() {
        this.router.navigate(['/home/review']);
    }

    getCount() {
        this.get('count');
    }

    getNumRejected() {
        this.get('rejectCount');

    }

    //rejected = this.getNumRejected();


    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {

                if (dataModelName == "count") {
                    this.approved = result;
                    this.approved = this.approved.length;
                }
                if (dataModelName == "rejectCount") {
                    this.rejectCounted = result.length;
                    console.log(this.rejectCounted);
                    // this.rejectCounted = this.rejectCounted.length;
                    // console.log(this.rejectCounted);
                    
                }
                this.completed = this.rejectCounted + this.approved;
                console.log(this.completed);

            },
            error => {
                    console.log(error);
                
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
                // On Success code here
            }, error => {
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

    delete(dataModelName, filter) {
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
