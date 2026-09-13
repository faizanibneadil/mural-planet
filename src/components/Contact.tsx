import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export const Contact: React.FC = () => {
    return <div className="max-w-3xl mx-auto py-5">
        <h2 className="text-2xl font-bold mt-4 mb-10">Leave us a  message & we will get back to you!</h2>
        <div className="grid grid-cols-1 gap-2">
            <div>
                <Label>Your Name</Label>
                <Input type="text" placeholder="John doe" />
            </div>
            <div>
                <Label>Your email</Label>
                <Input type="email" placeholder="johndoe@gmail.com" />
            </div>
            <div>
                <Label>Your Contact</Label>
                <Input type="number" inputMode="tel" placeholder="+(00) (000) (000)" />
            </div>
            <div>
                <Label>Message</Label>
                <Textarea placeholder="Type your Message" />
            </div>
            <Button variant='outline'>Submit</Button>
        </div>
    </div>
}