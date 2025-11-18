import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const Content = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const contentItems = [
    {
      id: 1,
      title: "10 трендов в маркетинге 2024",
      status: "published",
      date: "15 янв 2024",
      platforms: ["telegram", "dzen"],
      views: 1240,
    },
    {
      id: 2,
      title: "Как увеличить вовлеченность аудитории",
      status: "draft",
      date: "14 янв 2024",
      platforms: ["telegram"],
      views: 0,
    },
    {
      id: 3,
      title: "Секреты успешного контента",
      status: "scheduled",
      date: "16 янв 2024",
      platforms: ["dzen", "deepseek"],
      views: 0,
    },
  ];

  const statusColors = {
    published: "bg-green-500/10 text-green-500",
    draft: "bg-gray-500/10 text-gray-500",
    scheduled: "bg-blue-500/10 text-blue-500",
  };

  const statusLabels = {
    published: "Опубликовано",
    draft: "Черновик",
    scheduled: "Запланировано",
  };

  const platformColors = {
    telegram: "bg-blue-500",
    dzen: "bg-orange-500",
    deepseek: "bg-purple-500",
  };

  const platformLabels = {
    telegram: "TG",
    dzen: "ДЗ",
    deepseek: "ДС",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Контент</h1>
          <p className="text-muted-foreground mt-1">Управляйте всем вашим контентом</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Icon name="Plus" className="h-4 w-4 mr-2" />
              Создать контент
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Новый контент</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Заголовок</label>
                <Input placeholder="Введите заголовок" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Контент</label>
                <Textarea placeholder="Напишите ваш контент здесь..." rows={8} />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Сохранить черновик
                </Button>
                <Button className="flex-1">Опубликовать</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по контенту..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="outline">
          <Icon name="Filter" className="h-4 w-4 mr-2" />
          Фильтры
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="published">Опубликованные</TabsTrigger>
          <TabsTrigger value="draft">Черновики</TabsTrigger>
          <TabsTrigger value="scheduled">Запланированные</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {contentItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Icon name="FileText" className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" className="h-4 w-4" />
                            {item.date}
                          </div>
                          {item.status === "published" && (
                            <div className="flex items-center gap-1">
                              <Icon name="Eye" className="h-4 w-4" />
                              {item.views} просмотров
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <Badge className={statusColors[item.status]}>
                            {statusLabels[item.status]}
                          </Badge>
                          {item.platforms.map((platform) => (
                            <div
                              key={platform}
                              className={`${platformColors[platform]} text-white text-xs px-2 py-1 rounded font-medium`}
                            >
                              {platformLabels[platform]}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="ghost" size="icon">
                      <Icon name="Eye" className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="Pencil" className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="Copy" className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="Trash2" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="published">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Здесь будут отображаться опубликованные материалы
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="draft">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Здесь будут отображаться черновики
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Здесь будут отображаться запланированные публикации
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Content;
