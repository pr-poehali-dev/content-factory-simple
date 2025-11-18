import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const scheduledPosts = [
    { id: 1, time: "09:00", title: "Утренний пост", platform: "telegram", day: 1 },
    { id: 2, time: "14:00", title: "Обеденная статья", platform: "dzen", day: 2 },
    { id: 3, time: "18:00", title: "Вечерний подкаст", platform: "deepseek", day: 3 },
    { id: 4, time: "12:00", title: "Новости индустрии", platform: "telegram", day: 5 },
  ];

  const platformColors = {
    telegram: "bg-blue-500",
    dzen: "bg-orange-500",
    deepseek: "bg-purple-500",
  };

  const platformIcons = {
    telegram: "Send",
    dzen: "Rss",
    deepseek: "Mic",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Планировщик</h1>
          <p className="text-muted-foreground mt-1">Планируйте публикации на неделю вперед</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Icon name="Plus" className="h-4 w-4 mr-2" />
              Добавить публикацию
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Новая публикация</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Заголовок</label>
                <Input placeholder="Название публикации" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Контент</label>
                <Textarea placeholder="Текст публикации" rows={4} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Платформа</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="dzen">Яндекс.Дзен</SelectItem>
                      <SelectItem value="deepseek">Дипспик</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Дата и время</label>
                  <Input type="datetime-local" />
                </div>
              </div>
              <Button className="w-full">Запланировать</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Расписание на неделю</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Icon name="ChevronLeft" className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="ChevronRight" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-2">
            <div className="text-xs text-muted-foreground font-medium py-2">Время</div>
            {daysOfWeek.map((day, i) => (
              <div key={i} className="text-xs text-muted-foreground font-medium text-center py-2">
                {day}
              </div>
            ))}

            {hours.slice(8, 20).map((hour) => (
              <>
                <div key={hour} className="text-xs text-muted-foreground py-3 border-t">
                  {String(hour).padStart(2, "0")}:00
                </div>
                {daysOfWeek.map((_, dayIndex) => {
                  const post = scheduledPosts.find(
                    (p) => p.day === dayIndex && p.time.startsWith(String(hour).padStart(2, "0"))
                  );
                  return (
                    <div key={dayIndex} className="border-t border-l p-2 min-h-[60px] hover:bg-muted/50 cursor-pointer transition-colors">
                      {post && (
                        <div className={`${platformColors[post.platform]} text-white text-xs p-2 rounded`}>
                          <div className="flex items-center gap-1 mb-1">
                            <Icon name={platformIcons[post.platform]} className="h-3 w-3" />
                            <span className="font-medium">{post.time}</span>
                          </div>
                          <p className="truncate">{post.title}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Предстоящие публикации</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${platformColors[post.platform]} flex items-center justify-center`}>
                    <Icon name={platformIcons[post.platform]} className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {daysOfWeek[post.day]} в {post.time}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Icon name="Pencil" className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Icon name="Trash2" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Planner;
