
export const  states = [
    {
        id:"maintenance",
        name: "Maintenance",
        color: "#FFD300",
        isState: false,
        states:[
            {        
                id: "maintenance.setup",
                name: "Settup",
                color: "#FFD300",
                isState: true,
                substate: [
                    {
                        id:"maintenance.setup.new-equipment",
                        name: "New Equipment"
                    },
                    {
                        id:"maintenance.setup.new-material",
                        name: "New Material"
                    },
                ]
            },
            {        
                id: "maintenance.pm",            
                name: "Preventive Maintenance",
                color: "#FFD300",
                isState: true,
                substate: []
            },
            {        
                id: "maintenance.corrective",
                name: "Corrective Maintenance",
                color: "#FFD300",
                isState: true,
                substate: []
            },
        ]
    },
    {
        id:"operational",
        name: "Operational",
        color: "#336699",
        isState: false,
        states:[
            {        
                id: "operational.wa",
                name: "Wating Assistence",
                color: "#336699",
                isState: true,
                substate: [
                    {
                        id:"operational.wa.operator",
                        name: "Operator"
                    },
                    {
                        id:"operational.wa.tp",
                        name: "Third Party"
                    },
                ]
            },
            {        
                id: "operational.cm",            
                name: "Changing Material",
                color: "#336699",
                isState: true,
                substate: []
            },
            {        
                id: "operational.lom",
                name: "Lack of Material",
                color: "#336699",
                isState: true,
                substate: []
            },
        ]
    },
    {
        id:"yield",
        name: "Yield",
        color: "#FF0000",
        isState: false,
        states:[
            {        
                id: "yield.ly",
                name: "Low Yield Material",
                color: "#FF0000",
                isState: true,
                substate: []
            },
            {        
                id: "yield.lya",            
                name: "Low Yield Analisys",
                color: "#FF0000",
                isState: true,
                substate: []
            }           
        ]
    }
]