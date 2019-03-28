# type-iorm
```text

InsertQueryImpl
AbstractDMLQuery
QueryPart
    Named
        FieldOrConstraint
    SelectField    
    GroupField
    OrderField
    FieldOrRow
        Field
        Row
    SelectFieldOrAsterisk
        SelectField
        
    Statement
        Query
            StoreQuery
                
            Insert
                InsertFinalStep
                    InsertValuesStep
                InsertQuery
            Update
                UpdateFinalStep
                    UpdateConditionStep
                        UpdateWhereStep
                UpdateQuery
            Delete
                DeleteFinalStep
                    DeleteConditionStep
                        DeleteWhereStep
            ResultQuery
                Select
                    SelectFinalStep
                        ISelectUnionStep
                        SelectOptionStep
                            SelectForUpdateStep
                                SelectLimitStep
                                    SelectOrderByStep
                                        SelectHavingConditionStep
                                        SelectHavingStep
                                            SelectGroupByStep
                                                SelectWhereStep
                                                    SelectJoinStep
                                                        SelectOnConditionStep
                                                    SelectFromStep
                                                        SelectIntoStep
                                                            SelectSelectStep
                                                
 
```
