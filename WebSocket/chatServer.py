import asyncio
import websockets

async def clientHandler(websocket,path):
    clients.add(websocket)
    while True :
        receivedMessage = await websocket.recv()
        for data in clients :
            await data.send(receivedMessage)

clients = set()
server = websockets.serve(clientHandler, "localhost", 12345)
asyncio.get_event_loop().run_until_complete(server)
asyncio.get_event_loop().run_forever()