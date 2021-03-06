
 <div
       class="col-md-4">
      <div ba-panel ba-panel-title="Razas de Perros" ba-panel-class="with-scroll">
      <div class="horizontal-scroll">
        <div class="form-group select-page-size-wrap ">
            <label>Registros por página
            <select class="form-control selectpicker show-tick" title="Rows on page" selectpicker
                    ng-model="colorTableSize" ng-options="i for i in [5,10,15,20,25]">
            </select>
            </label>
        </div>
        <table class="table" st-table="raceTable"  st-safe-src="races" >
            <thead>
                <tr class="sortable ">
                    <th class="table-id" st-sort="id" st-sort-default="true">#</th>
                    <th st-sort="name">Nombre</th>
                </tr>
                <tr>
                    <th></th>
                    <th>
                        <input st-search="name" placeholder="Nombre de la raza" class="input-sm form-control search-input"
                                type="search"/>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="item in raceTable" st-select-row="row" st-select-mode="multiple">
                    <td class="table-id">@{{item.id}}</td>
                    <td>@{{item.name}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="6" class="text-center">
                        <div st-pagination="" st-items-by-page="colorTableSize" st-displayed-pages="5"></div>
                    </td>
                </tr>
            </tfoot>
        </table>
        </div>
      </div>
    
</div>

