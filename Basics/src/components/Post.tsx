export type Prop = {
    id?: number,
    name: string;
    subtitle: string;
    time?: string;
    description: string;
    img: string
}

export function Post({name, subtitle, time, description, img}:Prop){
    return (
        <div style={postStyle}>
            <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: 12}}>
                <img src={img} alt="profile pic" style={imgstyle}/>
                <div style={{marginLeft: 12, flex: 1}}>
                    <div style={{fontWeight: 600, fontSize: 15, color: '#1c1e21', lineHeight: 1.3}}>{name}</div>
                    <div style={{fontSize: 13, color: '#65676b', lineHeight: 1.3}}>{subtitle}</div>
                    {time ?  <div style={{display: "flex", alignItems: "center", marginTop: 4}}>
                        <div style={{fontSize: 13, color: '#65676b'}}>{time}</div>
                        <div style={{width: 4, height: 4, backgroundColor: '#65676b', borderRadius: '50%', margin: '0 6px'}}></div>
                        <img src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas=" style={{width:12, height:12, opacity: 0.6}} />
                    </div> : null}
                </div>
            </div>
            <div style={{fontSize: 14, color: '#1c1e21', lineHeight: 1.5}}>
                {description}
            </div>
        </div>
    )
}

const postStyle = {
    width: 500,
    backgroundColor: "white",
    borderRadius: 12,
    border: "1px solid #e1e5e9",
    padding: 20,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
}
const imgstyle = {
    width: 48,
    height: 48,
    borderRadius: "50%",
    objectFit: "cover" as const
}